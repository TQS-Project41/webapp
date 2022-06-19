package com.test.app;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testcontainers.containers.BrowserWebDriverContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
public class BrowserContainer {
  
  @Container
  private BrowserWebDriverContainer<?> container = new BrowserWebDriverContainer<>(
      "selenium/standalone-chrome-debug:latest")
      .withCapabilities(new ChromeOptions());

  public BrowserContainer() {
    container.start();
  }

  public WebDriver getDriver() {
    return container.getWebDriver();
  }
}
