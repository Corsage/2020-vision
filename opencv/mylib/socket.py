import time
import socketio
import cv2
import base64

"""
Where the disney princess my diamonds frozen
"""

sio = socketio.Client()

@sio.event
def connect():
    print('[INFO] Successfully connected to the server.')

@sio.event
def disconnect():
    print('[INFO] Disconnected from server.')

@sio.event
def connect_error(err):
    print('Connection failed', err)

class CVClient(object):
    def __init__(self, server_addr, stream_fps):
        self.server_addr = '3.228.22.13' # test
        self.server_port = 8080 # test 
        self._stream_fps = stream_fps
        self._last_update_t = time.time()
        self._wait_t = (1/self._stream_fps)

    def setup(self):
        print('[INFO] Connecting to server:', self.server_addr, self.server_port)

        sio.connect('http://{}:{}'.format(self.server_addr, self.server_port),
        transports=['websocket'])

        time.sleep(1)

        return self

    def _convert_image_to_jpeg(self, image):
        # Encode frame as jpeg.
        frame = cv2.imencode('.jpg', image)[1].tobytes()
        # Encode frame in base64 representation and remove
        # utf-8 encoding
        frame = base64.b64encode(frame).decode('utf-8')
        return "data:image/jpeg;base64,{}".format(frame)

    def send_data(self, frame, text):
        cur_t = time.time()
        if cur_t - self._last_update_t > self._wait_t:
            self._last_update_t = cur_t

            # Emit the server.
            sio.emit('ocv_image',
            {
                'image': self._convert_image_to_jpeg(frame),
            })

    def check_exit(self):
        pass

    def close(self):
        sio.disconnect()
