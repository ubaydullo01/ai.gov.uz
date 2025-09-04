FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:18 AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
