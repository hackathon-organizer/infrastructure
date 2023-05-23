# Hackathon Organizer INFRASTRUCTURE

Hackathon organizer infrastructure contains config and startup files. 

## Live demo

https://gentle-froyo-5a1b8e.netlify.app/

## About project

The Hackathon Organizer is a great choice when you and your organization face the challenge of organizing a hackathon. This solution contains everything you need to easily prepare and hold the entire event. It provides a step-by-step process for creating a hackathon, allowing you to customize information about your company, set the event description, and upload a logo. Users with ideas for awesome projects can create a team by providing necessary information that can attract other members. Alternatively, if a participant is looking for a challenge, they can simply update their profile by choosing from many skill tags that will be used to find a corresponding team that matches their skill set. Users also have access to an interactive schedule where selected mentors can create meetings with participating teams. There is a real-time notification system and an extensive chat system that supports audio/video and screen sharing to enhance team collaboration on projects that can change the world.

## Features:
- Create and update hackathons and teams
- Tags system used to help users find teams matched by their skills
- Team chat room that supports text, video, voice, and screen sharing
- Interactive schedule that allows for creating meetings with mentors
- User profile customization
- Score based team rating
- Leaderboard that counts and presents points given by the jury to teams
- Image files upload
- Real-time notifications and team invitation system for users
- And more

## Frontend

You can find more information about project Angular frontend [here](https://github.com/hackathon-organizer/hackathon-organizer)

## Services: 
Here you can find more details about certain services

- [hackathon-write-service](https://github.com/hackathon-organizer/hackathon-write-service)
- [hackathon-read-service](https://github.com/hackathon-organizer/hackathon-read-service)
- [user-write-service](https://github.com/hackathon-organizer/user-write-service)
- [user-read-service](https://github.com/hackathon-organizer/user-read-service)
- [messaging-service](https://github.com/hackathon-organizer/messaging-service)
- [discovery-service](https://github.com/hackathon-organizer/discovery-service)
- [config-server](https://github.com/hackathon-organizer/config-server)
- [api-gateway](https://github.com/hackathon-organizer/api-gateway)

## How to run

Application works in microservices architecture. In order to start you need to have Docker and Docker Compose installed.

### Development mode

Simply use `docker compose up` command

### Production mode

You need to add env variables in `.env` file before running production. After that you can use `docker compose -f docker-compose-prod.yml up` to start project 

## Build with

- SpringBoot
- Docker
- [Netflix Eureka](https://github.com/Netflix/eureka)
- [Keycloak](https://www.keycloak.org/)
- [HashiCorp Vault](https://www.vaultproject.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Testcontainers](https://www.testcontainers.org/)
- [OpenVidu](https://openvidu.io/)

