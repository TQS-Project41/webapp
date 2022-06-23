package com.test.app.steps;

import static org.assertj.core.api.Assertions.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;

import com.test.app.BrowserContainer;
import com.test.app.selenium.LoginPage;
import com.test.app.selenium.RegisterPage;
import com.test.app.selenium.SleepWrapper;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
// import io.github.bonigarcia.wdm.WebDriverManager;

public class SignUpSteps {

  private WebDriver driver = new BrowserContainer().getDriver();

  // private WebDriver driver = WebDriverManager.firefoxdriver().create();

  private String preLoginUrl;
  private List<Map<String, String>> users;
  
  @When("Registering the following users")
  public void registering_the_following_users(io.cucumber.datatable.DataTable dataTable) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    RegisterPage page = RegisterPage.getInstance(driver);

    users = dataTable.asMaps();

    for (Map<String, String> user : users) {
      page.register(user.get("name"), user.get("email"), user.get("password"), LocalDate.parse(user.get("birthdate"), formatter), user.get("phoneNumber"));
    }
  }

  @Then("they will be able to login")
  public void they_will_be_able_to_login() {
    LoginPage page = LoginPage.getInstance(driver);
    preLoginUrl = driver.getCurrentUrl();

    for (Map<String, String> user : users) {
      page.login(user.get("email"), user.get("password"));

      SleepWrapper.sleep();
      assertThat(driver.getCurrentUrl()).isNotEqualTo(preLoginUrl);
    }
  }

  @Then("they will not be able to login")
  public void they_will_not_be_able_to_login() {
    LoginPage page = LoginPage.getInstance(driver);
    preLoginUrl = driver.getCurrentUrl();

    for (Map<String, String> user : users) {
      page.login(user.get("email"), user.get("password"));

      SleepWrapper.sleep();
      assertThat(driver.getCurrentUrl()).isEqualTo(preLoginUrl);
    }
  }
  
}
