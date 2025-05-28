import { Locator, Page, expect } from "@playwright/test";

/**
 * Página de Login de la aplicación.
 * Implementa el patrón Page Object Model (POM) para automatizar el inicio de sesión.
 */
export class LoginPage {
  /** Página de Playwright */
  readonly page: Page;
  /** Campo de entrada para el nombre de usuario */
  readonly usernameInput: Locator;
  /** Campo de entrada para la contraseña */
  readonly passwordInput: Locator;
  /** Botón para enviar el formulario de login */
  readonly loginButton: Locator;

  /**
   * Constructor de la clase LoginPage.
   * @param page Instancia de Playwright asociada al navegador.
   */
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#usuario");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("button.login-btn");
  }

  /**
   * Navega a la página de login.
   */
  async goto() {
    await this.page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  }

  /**
   * Rellena el campo de usuario con el texto proporcionado.
   * @param username Nombre de usuario.
   */
  async fillUsername(username: string) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    //await expect(this.usernameInput).toHaveValue(username);
  }

  /**
   * Rellena el campo de contraseña con el texto proporcionado.
   * @param password Contraseña del usuario.
   */
  async fillPassword(password: string) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    //await expect(this.passwordInput).toHaveValue(password);
  }

  /**
   * Hace clic en el botón de login para iniciar sesión.
   */
  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * Ejecuta el flujo completo de login:
   * navega al sitio, rellena credenciales y hace clic en login.
   * @param username Usuario a ingresar.
   * @param password Contraseña correspondiente.
   */
  async login(username: string, password: string) {
    await this.goto();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
