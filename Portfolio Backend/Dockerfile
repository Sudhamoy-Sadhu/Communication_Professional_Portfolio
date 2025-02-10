# Stage 1: Build the application using Maven 3.4.2 and JDK 23
FROM maven:3.4.2-openjdk-23 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and the source code
COPY pom.xml /app/
COPY src /app/src/

# Build the project without running tests
RUN mvn clean package -DskipTests

# Stage 2: Run the application using OpenJDK 23
FROM eclipse-temurin:23-alpine

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar demo.jar

# Expose port 8080 for the application to run
EXPOSE 8080

# Set the entry point for the container
ENTRYPOINT ["java", "-jar", "demo.jar"]
