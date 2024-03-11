import time
import pyautogui 
import threading
import subprocess
colorX = 1089
colorY = 668
R = 64
G = 80
B = 141

x = 946
y = 729

x2 = 1215
y2 = 215

browserX =  820
browserY = 874


def click_task():
    while True:
        try:
            time.sleep(60)
            pyautogui.click(x2, y2)
        except:
            print("Error: Not found the button")

def open_browser():
    delay = 180 * 60 
    print("shutdown Timer started")
    command = f"sleep {delay} && sudo reboot -f &"
    subprocess.run(command,shell=True)
    while True:
        print("browser open")
        #pyautogui.click(browserX,browserY)
        br = "/usr/bin/google-chrome-stable"
        subprocess.run(f"{br} &", shell=True)
        #subprocess.run(br)
        time.sleep(5)

        #until color isnt there just click the button
        color = pyautogui.pixelMatchesColor(1564,191,(71,88,160),tolerance=12)
        while(color == False):
            pyautogui.click(1564,191)
            time.sleep(2)
            color = pyautogui.pixelMatchesColor(1564,191,(71,88,160),tolerance=12)
        print("old script")
        oldScript()
        break

def oldScript():
    threading.Thread(target=click_task, daemon=True).start()
    while True:
        i = pyautogui.pixelMatchesColor(colorX, colorY, (R,G,B),tolerance=12)
        if(i == True):

            pyautogui.moveTo(x,y)
            pyautogui.click()
            time.sleep(1)

        else:
            print("Color Not Found Trying Again in 1 sec")
            time.sleep(1)

print("Start")
open_browser()