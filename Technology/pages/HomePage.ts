import { $ } from "@wdio/globals";

class HomePage {
    [x: string]: any;
    private createNewProjectIcon=`//button[@id='create-menu-toggle']`;
    private createBlankProject=`//a[@data-qa-panel-name='blank_project']`;

  /**
 * Click project new button
 * member of Project Page 
 */  
async clickOnProjectNewButton() {
    try {
        console.log("Clicking on project new button sub menu tab " );
         await $(this.createNewProjectIcon).click();
    } catch (error) {
        await console.error('Error while clicking on Project New Button Dropdown Option: ');
        return error;
    }
}

/**
 * Click project new button
 * member of Project Page 
 */  
async clickOnBlankProjectButton() {
    try {
        console.log("Clicking on Blank project button" );
         await $(this.createBlankProject).click();
    } catch (error) {
        await console.error('Error while clicking on Blank project button');
        return error;
    }
}



}

export default new HomePage();
