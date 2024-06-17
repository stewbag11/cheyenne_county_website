# Introduction
Welcome to the Cheyenne County website admin guide. The Cheyenne County website is designed to be easily editable. You will primarily be working within the middle section of the HTML files, which is clearly commented. This guide will walk you through the basic steps of editing the site content and deploying those changes.

## Editing the Website

### Setup Visual Studio Code & Live Server
1. **Visual Studio Code Setup**
    - Launch Visual Studio Code.
    - Open the website folder by selecting `File > Open Folder` and navigate to the folder containing website files.

2. **Start Live Server**
    - Click the bottom right corner of Visual Studio Code where it says 'Go Live' to start Live Server, which allows you to view edits as if they were on the server

### Modifying Content
1. **Locate Editable Section**
    - Open the HTML file you need to edit (e.g., `index.html`)
    - Find the middle section of the code marked with comments like `<!-- Home -->` or `<!-- About -->`.

2. **Edit Content**
    - Modify the text between the HTML tags. For example, to change the welcome message, locate:

        `<header>
            <h1>Welcome</h1>
        </header>

        <ul>
            <li>We thank you for visiting Cheyenne County, Colorado!...</li>
        </ul>`

    - Edit the content within the `<li>` tags.
    - When adding a new section, ensure all necessary tags are copied and updated accordingly.

3. **Update Links & Images**
    - To update links, first ensure desired file(s) are in the correct folder (e.g., images `/assets/imgs` all other files `/pdfs/`) 
    - Then modify the `href` attribute in the `<a>` tags. For example:

        `<li><a href="https://www.google.com/maps?q=51+S+1st+St+E,+Cheyenne+Wells,+CO+80810" target="_blank">51 S 1st St E, Cheyenne Wells, CO 80810</a></li>`

    - To change images, update the src attribute in the <img> tags:

        `<img src="/assets/images/welcome.jpeg" alt="Welcome to Colorado Sign">`

4. **Save Changes**
    - Save your changes in Visual Studio Code `Ctrl+S or File > Save`. Live Server will automatically refresh the browser to display the updates.
 
### Uploading Changes
    - Push the updated website folder via FTP.
    - Verify changes on the live website to ensure proper implementation.

### Contact Information
If you encounter any issues or have questions, please contact:
    - Spencer Dennison
    - spencerdennison@gmail.com
    - (706)-978-2795