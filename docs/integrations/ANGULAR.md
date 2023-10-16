# Integrating Mocked API with Angular

Mocked API offers a diverse range of mocked data and API endpoints to support various frontend systems. If you don't have a backend application ready to support your frontend application, using Mocked API is a solid option. In this guide, we'll walk you through the process of integrating Mocked API with an Angular application.

## Prerequisites

Before we dive into the frontend integration, make sure your Mocked API server is up and running. Here are the steps to ensure the server is running:

1. **Rename Environment Variable File**:
   - Rename the environment variable file from `/api/.env.example` to `/api/.env`.
   - Open the `/api/.env` file and ensure that Swagger is enabled by setting `ENABLE_SWAGGER=true`.

2. **Start the Server**:
   - Open your terminal or command prompt and navigate to the project directory.
   - Run the following commands to start the server using either npm or yarn:

   ```
   npm install
   npm run serve
   ```

   or

   ```
   yarn install
   yarn serve
   ```

   If everything goes according to plan, you should see a message indicating that the Mock API is running on port 3000, and you can access it via your browser at `http://localhost:3000`. You can open this up and check out the available API endpoints Mocked API has to offer. Take note of this URL as you'll use it to connect to your application.

## Integration Steps

For this guide, we'll use Angular, which provides built-in tools and techniques to make the API integration process straightforward. Here's a step-by-step guide on how to consume Mocked API in an Angular application:

### 1. Create an Angular Project

If you haven't already, create a new Angular project using the Angular CLI. Run the following command to create a new project:

```bash
ng new mocked-app
```

### 2. Define a Service

Services in Angular are used to encapsulate the code that interacts with APIs. Create a service by running the following command:

```bash
ng generate service services/mocked-api
```

This will create a file named `mocked-api.service.ts` in your project's `services/` directory.

### 3. Import HttpClientModule

To make HTTP requests, you'll need to import the `HttpClientModule` module in your app. Open the `src/app/app.module.ts` file and add the following import:

```typescript
import { HttpClientModule } from "@angular/common/http";
```

Then, add `HttpClientModule` to the `imports` array in the `@NgModule` decorator.

Your file should look like this:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4. Service Implementation

In your service (e.g., `services/mocked-api.service.ts`), define methods to interact with the API. For this guide, we'll use the `/quotes` endpoint as an example. Here's a snippet of how to set up the service:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class MockedApiService {
    baseURL = "/api";  
    // You can switch "/api" with the Mocked API Live server URL.

    fetchQuotes(quantity: number = 10) {
        return this.http.get(`${this.baseURL}/quotes/${quantity}`);
    }

    fetchRandomQuote() {
        return this.http.get(`${this.baseURL}/quotes/random`);
    }

    constructor(private http: HttpClient) {}
}
```

### 5. Proxy Configuration

To avoid CORS issues when making requests to a server, you could set up a proxy. To to do this, create a `proxy.config.json` file in the project's root directory and add the following content:

```json
{
    "/api/*": {
        "target": "http://localhost:3000",
        "secure": false,
        "logLevel": "debug",
        "pathRewrite": {"^/api" : ""}
    }
}
```
Essentially, what this does is to forward whatever request that comes to `/api/*` to be forwarded to `http://localhost:3000`, our backend server. Next, open the `angular.json` file in the project's root directory and add the following configuration under the `serve` section:

```json
...
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "configurations": {
      ...
      "development": {
        "browserTarget": "mocked-app:build:development",
        "proxyConfig": "src/proxy.config.json", // add this in.
        ...
      }
    },
    ...
  },
...
```

### 6. Component Usage

In your Angular component (`src/app/app.component.ts`), you can use the service to fetch data and display it in your application. Here's an example of how to use the service:

```typescript
import { Component, OnInit } from '@angular/core';
import { MockedApiService } from './services/mocked-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quotes: any;
  randomQuote: any

  ngOnInit(): void {
    this.mockedApiService.fetchQuotes().subscribe((data) => {
      this.quotes = data;
    });
  }

  getRandomQuote() {
    this.mockedApiService.fetchRandomQuote().subscribe((data) => {
      this.randomQuote = data;
    });
  }

  constructor(private mockedApiService: MockedApiService) { }
}
```

### 7. Display Data

Use Angular templates (HTML) to display the fetched data in your component's view. For example, in `src/app/app-component.component.html`:

```html
    <div>
        <div class="header">
            <div>QuotesApp</div>
        </div>
        <div class="content">
            <p>Here are a few quotes to give you some insights...</p>
            <p>
                <span>Generate a random quote:</span>
                <button class="quote-btn" (click)="getRandomQuote()">
                    Get random quote
                </button>
            </p>
            <div class="random-quote">
                <p>{{randomQuote?.quote || 'Press the button above'}}</p>
                <p class="author" *ngIf="randomQuote">
                    -{{randomQuote?.author}}
                </p>
            </div>
            <div class="quotes">
                <div *ngFor="let quote of quotes" class="quote">
                    <p>{{quote.quote}}</p>
                    <p class="author">-{{quote.author}}</p>
                </div>
            </div>
        </div>
    </div>
```

### 8. Apply CSS Styles

To style your Angular application, add the following CSS rules in the `src/app/app-component.component.css` file and in the `src/styles.css` file.


```css
/* src/app/app-component.component.css */
    .header {
        padding: 20px;
        background-color: black;
        color: #fff;
    }

    .content {
        padding: 20px 40px;
    }

    .content p {
        margin-bottom: 10px;
    }

    .quote-btn {
        padding: 10px;
        margin-left: 10px;
        background-color: black;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .quotes {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    }

    .quote {
        border: 1px solid #eee;
        padding: 15px;
        border-radius: 10px;
        max-width: 500px;
    }

    @media screen and (max-width: 800px) {
        .quotes {
            justify-content: center;
        }
        .quote {
            min-width: 100%;
        }
    }

    .random-quote {
        border: 1px solid #eee;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .author {
        font-weight: 600;
        font-style: italic;
    }
```

```css
/* src/styles.css */
body {
    margin: 0px !important;
}
```

### 9. Error Handling

Don't forget to handle errors, such as network issues or API failures, in your service and component.

### 10. Testing

Test your Angular application to ensure that it correctly consumes the Mocked API and displays data.

If you want to work with a production server, simply replace `'/api/'` with the actual URL of the live server base URL you want to consume. Additionally, handle error cases appropriately and consider adding loading indicators while data is being fetched.

Have fun with other API Endpoints. 
Cheers 😊🥂✨. 