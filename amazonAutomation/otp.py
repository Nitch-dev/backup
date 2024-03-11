import pyautogui
import time



pyautogui.hotkey("winleft","w")
time.sleep(5)
pyautogui.write("https://mail.google.com/mail/u/0/#inbox")
pyautogui.press("enter")
time.sleep(6)
pyautogui.moveTo(1301,505)
pyautogui.hotkey("ctrl","t")
pyautogui.write("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26signIn%3D1%26useRedirectOnSuccess%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0")
pyautogui.press("enter")
time.sleep(3)
pyautogui.write("hassan.rahmani922@gmail.com")
time.sleep(4)
pyautogui.press("enter")
time.sleep(5)
pyautogui.write("Rahmani425@")
time.sleep(2)
pyautogui.press("enter")
pyautogui.hotkey("alt","1")
time.sleep(2)
pyautogui.click(1285,505)
print("finding the image")
time.sleep(2)
x,y = pyautogui.locateCenterOnScreen("otp.png")
pyautogui.moveTo(x,y)
pyautogui.doubleClick(x,y)
pyautogui.hotkey("ctrl","c")
time.sleep(3)
pyautogui.moveTo(1231,160)
pyautogui.click()
pyautogui.hotkey('ctrl',"v")


