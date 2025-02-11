export const enviroment = {
  production: false,
  URL_BACKEND: 'http://internal-backend-alb-1888547078.us-east-1.elb.amazonaws.com:8080/',   // Use the private IP and the correct port
  URL_SERVICE: 'http://internal-backend-alb-1888547078.us-east-1.elb.amazonaws.com:8080/api', // Same here, using the private IP
  URL_FRONTEND: 'http://frontend-alb-920332400.us-east-1.elb.amazonaws.com:4200',     // Assuming this is your frontend local setup
};
