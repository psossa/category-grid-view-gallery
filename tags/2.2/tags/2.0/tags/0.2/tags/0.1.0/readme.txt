=== Category Grid View Gallery ===
Contributors: Anshul Sharma 
Donate link:http://anshulsharma.in
Tags: category,grid,portfolio,gallery,shortcode,lightbox
Requires at least: 2.0.2
Tested up to: 3.1.4
Stable tag: trunk

Generates a grid view of the first images grabbed from posts of a category and displays the image and titles using a shortcode.Awesome for portfolios.

== Description ==

This plugin provides a new way to build your Portfolios and Photo Galleries. People who want to show their work using a gallery/portfolio dont have to exclusively install a plugin and upload images on it. Now, you can just upload your work as a blog post every now and then and this plugin will take care of the rest. Some of its features include:

*   Uses the [cgview] shortcode.  
    
*   Flexible. Through shortcode, user can control which category to show, the number of posts to show, the posts to exclude, the size of the thumbnail, whether or not to show the title, how to order them, quality of thumbnails, show posts only with specific tags and many more.
*   Show posts from more than one categories.
*   The thumbnails are generated on-the-fly and dynamically resized. It also has caching feature to reduce the load on the server.
*   Option to show the posts in a popup light box (Colorbox) on click. Posts loaded through AJAX.  
    
*   A very light weight jquery animated plugin.
*   If javascript is disabled/not loaded, the plugin falls back to a pure css animated gallery.
*   If no image is present a default image is shown.
*   Show anywhere in your Post or Page using a shortcode  
    
*   USAGE: Perfect for making a Photogallery or Portfolio with description written along with the image in a blog post. Also a unique way of displaying your FEATURED posts on your home page.

Check out the <a href=\"http://shabdcreatives.com/portfolio\" target=\"_blank\" title=\"Demo CGView\">Demo</a> to see it in action.

For a full list of options and support, visit <a href=\"http://anshulsharma.in\" target=\"_blank\" title=\"Anshul Sharma\"> Authors website</a>

For suggestions/feedback and requesting new features <a href=\"http://anshulsharma.in/cgview\" target=\"_blank\">visit here</a>

*Inspired by the <a href=\"http://wordpress.org/extend/plugins/list-category-posts/\" target=\"_blank\">List Category Posts</a> plugin by Fernandobt*

Future Features planned :

*   Admin page options for better control of the plugin.
*   User CSS, and different light and dark themes
*   A widget for the sidebar  
    
*   More efficient code

== Installation ==

*   Extract the zip file and just drop the contents in the wp-content/plugins/ directory of your WordPress installation and then activate the Plugin from Plugins page. 
*   Optionally, directly install the plugin from the wordpress interface by using \"Add New\" option from the Plugin menu and then activate it.  
    
*   USAGE :* [cgview num=9 id=4 size=250x150]*

use the above shortcode to display the gallery anywhere in your content.

For a full list of options and support, visit <a href=\"http://anshulsharma.in/\" target=\"_blank\" title=\"Anshul Sharma\"> Authors website</a>
== Frequently Asked Questions ==

**Q. I cannot see the thumbnail images. Why is it so?**  
A. It may be because the cache folder used to store the generated thumbnails is not writable on your server. Go to the *Plugin_Dir/catgrid/ *and change the folder permission of the cache folder to 755 or 777.

for more support visit the <a href=\"http://anshulsharma.in/cgview\" target=\"_blank\">plugin homepage</a>
== Screenshots ==
1. The shortcodes, how to use them.

2. The plugin in action

== Changelog ==
**0.1.0**

- Fixed the issue of colorbox opening too small when images in the content load slowly.

 

**Beta**