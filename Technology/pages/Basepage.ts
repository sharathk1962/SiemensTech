import { $, browser } from '@wdio/globals'
import { loginConfig } from '../config/login.conf';

export default class BasePage {

  private checkBox_loginpage = `//input[@type='checkbox']`;
  private LoginUsername_input = '#identifierId';//'user_login';
  private LoginPassword_input = 'user_password';
  private Login_button = `//input[@type='submit']`;
  private dashBoard = '//button[text()="Dashboard]';


    async productNavigate() {
        try {
            await browser.url(browser.options.baseUrl as string);
            await browser.pause(10000);
        } catch (error) {
            console.error('Error while product login:', error);
            throw new Error('Navigation failed');
        }
    }

    async productUserandPassword(): Promise<boolean> {
        try {
             await $(this.checkBox_loginpage).click();
             await $(this.checkBox_loginpage).click();

            await $(this.LoginUsername_input).setValue(loginConfig.username);
            console.log("Entering Username : " , loginConfig.username);

            await $(this.LoginPassword_input).setValue(loginConfig.password);
            console.log("Entering Password : " + loginConfig.password);

            //report.addStep(`Entering Username : ${await browser.config['user1']['password']}`);
            await $(this.Login_button).click();
            console.log("Clicking on Login Button");

            await this.verifyDashboardLoaded();
            console.log("HomePage loaded");
            return true;
        } catch (error) {
            console.error("Error while entering Username and Password " );
            return false;
        }
    }

    async verifyDashboardLoaded() {
        await browser.waitUntil(async () => {
            console.log("Login Successfull and GitLAB home page appeared");
            return (await $(this.dashBoard).getText()) === "Dashboard";
        }, {
            timeout: 30000,
            interval: 3000
        })
    }
}

export const base = new BasePage();
