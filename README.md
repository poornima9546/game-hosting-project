# Tic Tac Toe Game Hosting

## Project Overview

This project is a simple web-based Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. The game is hosted using the Nginx web server on Ubuntu Linux and is accessible locally through port **4500**.

---

## Features

- Interactive Tic-Tac-Toe game
- Two-player gameplay (X and O)
- Winner detection
- Draw detection
- Restart Game button
- Responsive and colorful user interface

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Nginx
- Ubuntu Linux
- Git & GitHub

---

## Project Structure

```
game-hosting-project/
│
├── game/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── nginx-config/
│   └── tictactoe.conf
│
├── screenshots/
│   └── game.png
│
└── README.md
```

---

## Source Code

The game source code is located in the `game` folder.

- **index.html** – Creates the structure and layout of the Tic-Tac-Toe game.
- **style.css** – Styles the game with colors, spacing, buttons, and responsive design.
- **script.js** – Contains the game logic, including player turns, winner detection, draw detection, and restart functionality.

---

## Installation Steps

### 1. Clone the repository

```bash
git clone <repository-url>
```

> Replace `<repository-url>` with your GitHub repository URL after uploading the project.

### 2. Navigate to the project folder

```bash
cd game-hosting-project
```

### 3. Create the web directory

```bash
sudo mkdir -p /var/www/tictactoe
```

### 4. Copy the game files

```bash
sudo cp game/* /var/www/tictactoe/
```

### 5. Copy the Nginx configuration

```bash
sudo cp nginx-config/tictactoe.conf /etc/nginx/sites-available/tictactoe
```

### 6. Enable the website

```bash
sudo ln -s /etc/nginx/sites-available/tictactoe /etc/nginx/sites-enabled/
```

### 7. Test the Nginx configuration

```bash
sudo nginx -t
```

### 8. Restart Nginx

```bash
sudo systemctl restart nginx
```

### 9. Verify that Nginx is listening on port 4500

```bash
sudo ss -tulnp | grep 4500
```

### 10. Open the application

Open the following URL in your browser:

```
http://localhost:4500
```

---

## Web Server Configuration

- **Web Server:** Nginx
- **Port:** 4500
- **Document Root:** `/var/www/tictactoe`

---

## Screenshot

![Game Screenshot](screenshots/game.png)
