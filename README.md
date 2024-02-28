# @carlosfrontend/dropdownme

## Dynamic User Interface Interactions

### JavaScript Course The Odin Project

This package was developed as an exercise for [The Odin Project](https://www.theodinproject.com/). It's pretty lightweight and allows you to add as many animated dropdown menus as you need.

### HTML

1. The first thing you need is to copy and paste this codeblock container into your body tags:

   `index.html`

   ```html
   <body>
     <nav id="navbar">
       <!-- Dropdonws will goes here  -->
     </nav>
   </body>
   ```

2. Each block with the `.parentContainer` class is a dropdown menu. You can add by copying and pasting as many as you need at you navbar container:

   `index.html`

   ```html
   <nav id="navbar">
     <!-- Start of the first dropdown -->

     <div class="parentContainer">
       <div class="parentItem">Home</div>
       <div class="itemsContainer">
         <div class="dummy-item"></div>
         <div class="item">One</div>
         <div class="item">Two</div>
         <div class="item">Three</div>
       </div>
     </div>

     <!-- End of the first dropdown -->

     <!-- Start of the second dropdown -->

     <div class="parentContainer">
       <div class="parentItem">Services</div>
       <div class="itemsContainer">
         <div class="dummy-item"></div>
         <div class="item">One</div>
         <div class="item">Two</div>
         <div class="item">Three</div>
         <div class="item">Four</div>
       </div>
     </div>

     <!-- End of the second dropdown -->
   </nav>
   ```

### Advice

3. The only **requirement** is **not to change the name of the nav id and the name classes**. You can replace the rest of the text with whatever you want. You can even add more tags with the html tag if you need more elements:

   ```html
   <div class="item">New Item</div>
   ```

### Javascipt

1. Install it as a dependency in your project with this terminal command:

   ```console
   npm i @carlosfrontend/dropdownme
   ```

2. Make sure you import it into your project's javascipt file and call the function to animate the dropdown:

   `index.js`

   ```js
   import dropDownMe from "@carlosfrontend/dropdownme";
   dropDownMe();
   ```

### Link:

:white_check_mark: [Assigments](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions) :blue_book:

:white_check_mark: [Live Preview](https://carlosfrontend.github.io/dropdown-menu-odin-project/) :computer:

Feel free to change the styles as you like.

Happy Coding!! :coffee: :rocket:
