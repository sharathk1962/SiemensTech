import { $ } from "@wdio/globals";

class ProjectPage {
    [x: string]: any;
 
    private createNewProjectIcon=`//span[contains(text(),'New project/repository')]`;

  /**
 * Click project new button
 * member of Project Page 
 */  
async clickOnNewprojectMenu() {
    try {
        console.log("Clicking on project new button sub menu tab " );
         await $(this.createNewProjectIcon).click();
    } catch (error) {
        await console.error('Error while clicking on Project New Button Dropdown Option: ');
        return error;
    }
}

/*
    * Enter project details
    * @param field - The field name to enter details (e.g., "Project Name")
    * @param value - The value to input into the field
    */
   async enterProjectDetails(field: string, value: string): Promise<void> {
       try {
           const inputField = await $(`input[name="${field}"]`); // ✅ Update selector if needed
           await inputField.setValue(value);
           console.log(`Entered ${value} into ${field}`);
       } catch (error) {
           console.error(`Error while entering project details: ${field} - ${value}`, error);
           throw new Error('Failed to enter project details');
       }
   }


}

export default new ProjectPage();
