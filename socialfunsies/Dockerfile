# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jdk-slim

# Set the author
LABEL authors="alexanderlandaverde"

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the target directory into the container at /app
COPY target/socialfunsies-0.0.1-SNAPSHOT.jar /app/socialfunsies.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["sh", "-c", "java -version && java -jar socialfunsies.jar"]
