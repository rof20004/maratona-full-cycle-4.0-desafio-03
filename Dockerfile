FROM node:12-alpine3.9 as builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM node:12-alpine3.9
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "start:prod"]
