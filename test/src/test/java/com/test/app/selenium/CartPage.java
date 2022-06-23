package com.test.app.selenium;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {

  @FindBy(css = ".row.mb-4")
  private List<WebElement> cartItems;

  @FindBy(id = "Schedule")
  private WebElement toggleScheduleInput;

  @FindBy(id = "birthday")
  private WebElement sheduleDateInput;

  @FindBy(id = "appt")
  private WebElement sheduleTimeInput;

  @FindBy(css = "div.mb-5 h5:not([class])")
  private WebElement totalPriceLabel;

  @FindBy(css = "h6.mb-0.text-muted")
  private WebElement totalItemsLabel;

  @FindBy(className = "btn-dark")
  private WebElement orderButton;
  
  public static CartPage getInstance(WebDriver driver) {
    driver.get(PageEnum.CART.getUrl());
    return PageFactory.initElements(driver, CartPage.class);
  }

}
