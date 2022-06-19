package com.test.app.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

  @FindBy(id = "email")
  private WebElement emailInput;

  @FindBy(id = "password")
  private WebElement passwordInput;

  @FindBy(className = "login100-form-btn")
  private WebElement submitBtn;

  public void login(String email, String password) {

    clearForm();

    emailInput.sendKeys(email);
    passwordInput.sendKeys(password);

    submitBtn.click();

  }

  private void clearForm() {
    emailInput.clear();
    passwordInput.clear();
  }

  public static LoginPage getInstance(WebDriver driver) {
    driver.get(PageEnum.LOGIN.getUrl());
    return PageFactory.initElements(driver, LoginPage.class);
  }

}
