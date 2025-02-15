# Step 1: Use an official Java runtime as the base image
FROM openjdk:21-slim AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the Maven files (pom.xml)
COPY pom.xml .

# Step 4: Install Maven and download dependencies (to cache dependencies)
RUN apt-get update && apt-get install -y maven
RUN mvn dependency:go-offline

# Step 5: Copy the rest of the application source code
COPY src ./src

# Step 6: Build the application using Maven (skip tests to speed up the build)
RUN mvn clean package -DskipTests

# Step 7: Use the same lightweight JDK image to run the Spring Boot application
FROM openjdk:21-slim

# Set the working directory in the final image
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Step 8: Copy application.properties (if needed inside the container)
COPY src/main/resources/application.properties /app/application.properties

# Step 9: Expose the port that the Spring Boot app will run on (default is 8080)
EXPOSE 8080

# Step 10: Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
