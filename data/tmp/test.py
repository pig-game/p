import RPI.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(18,GPIO.OUT)

while True:
    GPIO.