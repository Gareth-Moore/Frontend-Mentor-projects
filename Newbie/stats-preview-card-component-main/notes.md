Notes:

Start here:
- I struggled for a little while because the card-image had a little bit of the div showing at the bottom for some unholy reason. I tried everything. Apparently you can't use width: 100%; and height: 100%; at the same time if you want to preserve aspect ration. I eventually solved it by changing the image element to a display: block; which fixed it straight away.
- if you add a background image it doesn't automatically change the size of the div. Therefor the div has to be manually sized. In order to circumvent this you can add the same image inside the div and adjust the sizing to your liking. Now the div is sized according to the img inside. However you cannot use blend modes with an img tag. You need to set visibility: hidden; and then the img will still upkeep the sizing on the box but be invisible so the background image can be blended.
- I used a combination of the background image with blend as well as the img itself using filter to get the final look of the picture. It worked pretty well.
- I have spent a lot of time trying to edit this image and I am finally giving up and advising myself to do a short course of photo editing as I am sure I will need this knowledge/know how in the future.
- discovered some useful extensions but for firefox.
- I managed to get the colors about right by using the color picker in the browser which went pretty well and I think the image looks about the same now.
- learned a bit about filter: that you can use on img tags which is pretty nice and convenietn.
- I spent a lot of time fine tuning the fonts and sizing and everything. I think that was mostly a waste of time. I don't think I will have to try copy an existing code to this level of accuracy. Although it is pleasing to have a project that looks exactly (or almost) like the example image. It isn't really worth the time. You get it close with your eye and that is fine because you have more important things to worry about.
- I recently looked at another developers work on FEM and found that organized code makes my life a million times easier. I really should practice organized code because having unorganized code is a nightmare. You have to figure out where every little thing is and it's very time consuming.
- I used 
