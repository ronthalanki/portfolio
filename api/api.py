import time
import cv2
import io
import numpy as np

from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/img')
def img():
    rgb = np.random.randint(255, size=(800, 800, 3), dtype=np.uint8)

    is_success, buffer = cv2.imencode(".jpg", rgb)
    io_buf = io.BytesIO(buffer)
    # base64.b64encode(io_buf.getvalue())
    return send_file(io_buf, mimetype='image/jpg')
