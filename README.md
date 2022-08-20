<h1><a href="https://hs.hitarashi.in">Heroku Switcher</a></h1>

Ever thought of how can you run your heroku app without worrying about dyno hours or adding card to your heroku account? Heroku Switcher got you covered. It's a simple web app that allows you to keep your heroku apps running without worrying about anything.

## Tech Stack

<br>

<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117364277-fc4eb280-aebd-11eb-8769-a3583c6a2037.png" alt="Git" title="Git" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117364276-fc4eb280-aebd-11eb-92ba-8a6ef74b7313.png" alt="GitHub" title="GitHub" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/182618272-390ab138-7b29-44a0-85a2-62633957d815.png" alt="VisualStudio" title="VisualStudio" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/182618508-1b12183b-5398-48d2-92e7-ff0969a22624.png" alt="Postman" title="Postman" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447535-f00a3a00-af3d-11eb-89bf-45aaf56dbaf1.png" alt="HTML" title="HTML" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" /></code>
	<code><img height="40" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt="TailwindCSS" title="TailwindCSS" /></code>
	<code><img height="50" src="https://brand.heroku.com/static/media/heroku-logotype-vertical.f7e1193f.svg" alt="Heroku" title="Heroku" /></code>
</div>

## Usage

- Create two Heroku accounts
- Deploy your app on one heroku account only. We will call this your main account.
- Leave the second account as it is.
- Get API Keys from both the accounts and carefully fill all the required fields below.
- Once you have filled up everything carefully, click on Add APP. Voila! your Heroku App should run with no downtime.

<br>

<img src='https://raw.githubusercontent.com/sayeed205/Assets/main/Add%20New%20App.png' alt='add new app' style='width: 30rem'>

## Tips & Tricks for Heroku

- If you are using Gmail you can use googlemail.com domain to create new heroku account as Second account.
- You can make UL account in heroku by using a "+" and a name after your mail <br> example: <br><code>sayeed205@gmail.com</code> this is my main mail and I can use <code>sayeed205+xyz@gmail.com</code> to create new account in heroku.
  <b>If your main mail banned in heroku then this methode won't work</b>

## Deployment

### Local/VPS

- install nodeJS
- ```bash
  # clone this repo
  git clone https://github.com/sayeed205/Heroku-Switcher.git

  #change directory to the repo
  cd Heroku-Switcher

  # install node modules
  npm i
  ```

- Setup Environment variables
  ```bash
  	# create .env file
  	touch .env
  	# add environment variables
  	PORT=5000
    MONGO_URI= #your mongoDB uri
    JWT_SECRET= #your jwt secret to auth user can be anything
    DB_NAME= #your mongoDB name
    COLLECTION_NAME= #your mongoDB collection name
  NODE_ENV=production
  ```
- install add dependencies and make a production build for front end
  ```bash
  	npm run build
  ```
- start the app
  ```bash
  	npm start
  ```

### Heroku

<a href="https://heroku.com/deploy">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

### Other Deployment Methods

- <b>WIP</b>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
