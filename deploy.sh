export = PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.17.1/bin

cd simple-express-server
git pull origin main
pm2 kill
pm2 start index.mjs
