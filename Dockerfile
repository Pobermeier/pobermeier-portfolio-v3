FROM node:14.16.0-alpine3.13 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run cicd

FROM node:14.16.0-alpine3.13 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start
