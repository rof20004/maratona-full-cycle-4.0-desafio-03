FROM node:12-alpine3.9 as builder
WORKDIR /app
COPY . .
RUN yarn

FROM node:12-alpine3.9
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "start:prod"]