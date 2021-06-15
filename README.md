# Sooova-Bootcampspot-HW-3-06-2021 #

# The Task #
This week's homework task was to create a javascript applet that generates a random 8 string password. 
While doing this assignement i went through a lot of interations that were either not working, or were crashing my DevTools for some reason. 
I finally settled on the solution i have currently.

# Notes #
I had an issue/confusion as to why i could not call:
passwordText.value = password;
and instead i had to:
passwordText.value = generatePassword();

In the first line of code, it was a function and i was already calling upon generatePassword to trigger, and was then trying to 
call the value of the variable password, but it was not working.
I figured that it wasn't working, because using the dev tools i could see the password generating, but not showing on the HTML.
