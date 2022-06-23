package com.test.app.steps;

import static org.assertj.core.api.Assertions.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;

import org.openqa.selenium.WebDriver;

import com.test.app.BrowserContainer;
import com.test.app.selenium.LoginPage;
import com.test.app.selenium.RegisterPage;
import com.test.app.selenium.SleepWrapper;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
// import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {

  private WebDriver driver = new BrowserContainer().getDriver();

  // private WebDriver driver = WebDriverManager.firefoxdriver().create();

  private String preLoginUrl;

  @Given("The following users must exist")
  public void the_following_users_must_exist(io.cucumber.datatable.DataTable dataTable) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    RegisterPage page = RegisterPage.getInstance(driver);

    for (Map<String, String> user : dataTable.asMaps()) {
      page.register(user.get("name"), user.get("email"), user.get("password"), LocalDate.parse(user.get("birthdate"), formatter), user.get("phoneNumber"));
    }
  }

  @When("the user {string} logs in with the password {string}")
  public void the_user_logs_in_with_the_password(String email, String password) {
    LoginPage page = LoginPage.getInstance(driver);
    preLoginUrl = driver.getCurrentUrl();

    page.login(email, password);
  }

  @Then("the login must succeed")
  public void the_login_must_succeed() {
    SleepWrapper.sleep();
    assertThat(driver.getCurrentUrl()).isNotEqualTo(preLoginUrl);
  }

  @Then("the login must not succeed")
  public void the_login_must_not_succeed() {
    SleepWrapper.sleep();
    assertThat(driver.getCurrentUrl()).isEqualTo(preLoginUrl);
  }
  
}
