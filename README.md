# Instagram picture getter

### DISCLAIMER
**This is a fun project made purley out of boredom.**

It's an browser extention for viewing pictures on Instagram. It uses css selectors to grab all the information from instagram and with any changes facebook makes to the site the extention may break.

### WHAT DOES IT DO

- You can right click on a post and in the context menu there is an option to open the picture in full resolution in a new tab.
- When you are viewing a story, you can press on the icon of the extention and open it on a new tab.
- And finally when you visit a profile, beside the username there is a button that will open the users profile picture in full resolution on [instadp.com](https://www.instadp.com/).

As for the use of [instadp.com](https://www.instadp.com/), I did some digging and I found the classic `https://instagram.com/${username}/?__a=1` method to get the JSON to a user's info and therefore the link for the hd profile picture, but for some reason it wasn't as hd as the picture from instadp.com. So as I wasn't willing to spend any more time trying to figure out why, I stick with it.
