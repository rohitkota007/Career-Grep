# Career Grip

Career Grip is a MERN Stack based web app which helps in streamlining the flow of job application process. It allows users to select there roles (applicant/recruiter), and create an account. After logging in, a recruiter can create/delete/update jobs, shortlist/accept/reject applications, view resume and edit profile. And, an applicant can view jobs, search with various filters, apply for jobs , view applications, upload profile picture, upload resume and edit profile.

Directory structure of the web app is as follows:

```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

## Instructions for initializing web app:

- Install Node JS, MongoDB in the machine.
- Start MongoDB server: `sudo service mongod start`
- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.

# Machine Specifications

Details of the machine on which the webapp was tested:

- Operating System: Ubuntu
- Terminal: Bash
- Processor: Intel Core i7-8750H CPU @ 2.20 GHz 2.21 GHz
- RAM: 8 GB
