# Stage 1: Build the application using Maven 3.4.2 and JDK 23
FROM maven:3.4.2-openjdk-23 AS build

WORKDIR /app

COPY pom.xml /app/
COPY src /app/src/

# Build the project without running tests
RUN mvn clean package -DskipTests

# Stage 2: Run the application using OpenJDK 23
FROM eclipse-temurin:23-alpine


COPY --from=build /app/target/*.jar demo.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo.jar"]
