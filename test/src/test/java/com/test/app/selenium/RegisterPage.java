package com.test.app.selenium;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {

  @FindBy(id = "name")
  private WebElement nameInput;

  @FindBy(id = "email")
  private WebElement emailInput;

  @FindBy(id = "pass")
  private WebElement passwordInput;

  @FindBy(id = "pass_again")
  private WebElement passwordRepeatInput;

  @FindBy(id = "birthday")
  private WebElement birthdayInput;

  @FindBy(id = "phonenumber")
  private WebElement phoneNumberInput;

  @FindBy(className = "login100-form-btn")
  private WebElement submitBtn;

  @FindBy(css = "form")
  private WebElement form;

  private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

  public boolean register(String name, String email, String password, LocalDate birthday, String phoneNumber) {

    clearForm();

    nameInput.sendKeys(name);
    emailInput.sendKeys(email);
    passwordInput.sendKeys(password);
    passwordRepeatInput.sendKeys(password);
    birthdayInput.sendKeys(formatter.format(birthday));
    phoneNumberInput.sendKeys(phoneNumber);

    submitBtn.click();

    SleepWrapper.sleep();
    
    return getSuccessMessage() != null;

  }

  private void clearForm() {
    nameInput.clear();
    emailInput.clear();
    passwordInput.clear();
    passwordRepeatInput.clear();
    birthdayInput.clear();
    phoneNumberInput.clear();
  }

  private WebElement getSuccessMessage() {
    try {
      return form.findElement(By.cssSelector("p.text-success"));
    } catch (NoSuchElementException e) {
      return null;
    }
  }

  public static RegisterPage getInstance(WebDriver driver) {
    driver.get(PageEnum.REGISTER.getUrl());
    return PageFactory.initElements(driver, RegisterPage.class);
  }

}
