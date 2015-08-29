
Dynamic Site Map with PHP
-------------------------
Copyright (c) 2004, Gary White. See the file gpl.txt for details.

Please report any bugs at http://apptools.com/contact.php


Files included in this archive:
	readme.txt.........This file
	gpl.txt............The General Public License
	headcontent.txt....A small bit of CSS and JavaScript that goes in the <head> of the page
	gwsitemap.php......The PHP script that generates the site map
	folder.gif.........Images used in the page
	html.gif...........Images used in the page
	minus.gif..........Images used in the page
	plus.gif...........Images used in the page
	server.gif.........Images used in the page


Installation
------------
Extract the files from this archive. You can place them anywhere within your site. An example
might be to place the headcontent.txt and gwsitemap.php files in the /include directory and 
the images in the /images directory.


For Dreamweaver users
---------------------
The file headcontent.txt includes the MM_findObj JavaScript function. If your page already 
has this function available, either in the file or in a linked .js file, you can remove that
function.


Configuration
-------------
Open the file gwsitemap.php in your HTML editor or a text editor. Locate the line:

$startin="/";

If you want to start the site map in a directory other than your root directory, change the
above line to the directory where you want the site map to start. For example, if you wanted
the top level of the site map to be the directory "/public_pages/", you would do it like this:

$startin="/public_pages/";

Next, find this line:

$imgpath="";

Change that to indicate the actual root-relative location of the images extracted from this
archive. If you, for example, placed the images in your "/images" directory, you would change 
the above line to:

$imgpath="/images";


The remaining two configuration items are arrays. The IMPORTANT part is that each item in 
the arrays is enclosed by quotes and there is a comma separating the items. The last item in 
the list does NOT have a comma after it. If you add another name to the end of the list, 
don't forget to put a comma after the old last item.


Next, locate the following block of code:

$types=array(
	".php",
	".html",
	".htm",
	".shtm",
	".sthml"
);

By default, the script will index files with .php, .html, .htm, .shtm, and .shtml file
extensions. If you want to add any other file types, add their extensions to this array.


Finally, locate this block of code:

$ignore=array(
	".htaccess",
	"cgi-bin",
	"images",
	"index.htm",
	"index.html",
	"index.php",
	"robots.txt"
);

Add to this list, any other files or directories that you do not want the site map to show.
Be sure to include your default page(s) in this list, like index.html. If you don't, there 
will be two links to that page, one to the directory and one to the default page.

As an example, assume you had a file called dbconnect.php that included database login 
information and you did not want that page in the site map, then you would add it to the 
list with the result looking like this:

$ignore=array(
	".htaccess",
	"cgi-bin",
	"dbconnet.php",
	"images",
	"index.htm",
	"index.html",
	"index.php",
	"robots.txt"
);

Note that the order of the files/directories is unimportant. I tend to try to keep them 
alphabetical simply to make it easier to see if something is in the list.


Usage
-----
Include the file "headcontent.txt" file in the <head> of the page.
Include the file "gwsitemap.php" in the <body> of the page.

At its most basic, the document would look like this:
<html>
<head>
<?php include "headcontent.txt";?>
</head>
<body>
<h1>Site Map</h1>
<?php include "gwsitemap.php"; ?>
</body>
</html>

Of course you can  add other content and styling to the page.

