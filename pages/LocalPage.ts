import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Local".
 * Implementa el patrón Page Object Model (POM) para automatizar acciones
 * dentro del módulo Local de la aplicación.
 */
export class LocalPage {
  private readonly nombreLocalTextbox: Locator;
  private readonly descripcionLocalTextbox: Locator;
  private readonly nuevoButton: Locator;
  private readonly guardarButton: Locator;
  private readonly localLink: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;

  /**
   * Constructor de la clase.
   * @param page Página de Playwright sobre la que se automatiza.
   */
  constructor(page: Page) {
    this.nombreLocalTextbox = page.locator("#txtNombreLocal");
    this.descripcionLocalTextbox = page.locator("#txtDescripcion");
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.guardarButton = page.getByText("Guardar");
    this.localLink = page.locator("a").filter({ hasText: /^Local$/ });
    this.editarButton = page.locator('(//button[@id="btnEditar"])[2]');
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /** Hace clic en el enlace del módulo Local. */
  async clickLocal() {
    await this.localLink.click();
  }

  /** Hace clic en el botón "Nuevo". */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Editar". */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Guardar". */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Eliminar". */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre del Local".
   * @param nombreLocal Nombre del local a ingresar.
   */
  async fillNombreLocal(nombreLocal: string) {
    await this.nombreLocalTextbox.click();
    await this.nombreLocalTextbox.fill(nombreLocal);
  }

  /**
   * Rellena el campo "Descripción del Local".
   * @param descripcionLocal Descripción del local a ingresar.
   */
  async fillDescripcionLocal(descripcionLocal: string) {
    await this.descripcionLocalTextbox.click();
    await this.descripcionLocalTextbox.fill(descripcionLocal);
  }
}
