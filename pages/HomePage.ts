import { Locator, Page } from "@playwright/test";

/**
 * Página de inicio del sistema.
 * Contiene accesos a los módulos principales, como "Administración".
 */
export class HomePage {
  private readonly moduloAdministracionLink: Locator;

  /**
   * Constructor de la clase.
   * @param page Página de Playwright sobre la que se automatiza.
   */
  constructor(page: Page) {
    this.moduloAdministracionLink = page.getByRole("link", {
      name: "A Administracion ",
    });
  }

  /**
   * Hace clic en el enlace del módulo "Administración".
   */
  async clickModuloAdministracion() {
    await this.moduloAdministracionLink.click();
  }
}
