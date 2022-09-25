import eel
from config import *


if __name__ == '__main__':
    eel.init('front-end')
    eel.start('/pages/start.html', mode="chrome", size=(900, 600))
