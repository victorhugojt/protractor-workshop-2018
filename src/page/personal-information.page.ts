import { by, element } from 'protractor';

export class PersonalInformationPage {
  private firstNameField = element(by.name('firstname'));
  private lastNameField = element(by.name('lastName'));
  private sexField = element(by.className('sex'));
  private experienceField = element(by.name('experience'));
  private professionField = element(by.name('profession'));
  private toolsField = element(by.name('tools'));
  private continentField = element(by.id('continent'));

  public async fillForm(formData: any): Promise<void> {
    await this.firstNameField.sendKeys(formData.firstName);
    await this.lastNameField.sendKeys(formData.lastName);
    await this.sexField.sendKeys(formData.sex);
    await this.experienceField.sendKeys(formData.experience);
    await this.professionField.sendKeys(formData.profession[0]);
    await this.toolsField.sendKeys(formData.tools[0]);
    await this.continentField.sendKeys(formData.continent);
  }

}
