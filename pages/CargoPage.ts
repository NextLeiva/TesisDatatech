import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de cargos.
 * Implementa el patrón Page Object Model (POM) para automatizar las acciones
 * dentro del módulo "Cargo" del sistema.
 */
export class CargoPage {
  private readonly page: Page;
  private readonly cargoLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreCargoTextbox: Locator;
  private readonly descripcionCargoTextbox: Locator;
  private readonly areaCombo: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;

  /**
   * Constructor de la clase.
   * @param page Instancia de Playwright que representa la página.
   */
  constructor(page: Page) {
    this.page = page;
    this.cargoLink = page.locator("a").filter({ hasText: /^Cargo$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreCargoTextbox = page.locator("#txtNombreCargo");
    this.descripcionCargoTextbox = page.locator("#txtDescripcion");
    this.areaCombo = page.locator("#cboArea");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[3]');
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /**
   * Navega al módulo "Cargo".
   */
  async clickCargo() {
    await this.cargoLink.click();
  }

  /**
   * Hace clic en el botón "Nuevo" para agregar un nuevo cargo.
   */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /**
   * Hace clic en el botón "Guardar" para registrar el cargo.
   */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /**
   * Hace clic en el botón "Editar" para modificar un cargo existente.
   */
  async clickEditar() {
    await this.editarButton.click();
  }

  /**
   * Hace clic en el botón "Eliminar" para borrar un cargo.
   */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre del Cargo".
   * @param nombreCargo Nombre del cargo a ingresar.
   */
  async fillNombreCargo(nombreCargo: string) {
    await this.nombreCargoTextbox.click();
    await this.nombreCargoTextbox.fill(nombreCargo);
  }

  /**
   * Rellena el campo "Descripción del Cargo".
   * @param descripcionCargo Descripción del cargo.
   */
  async fillDescripcionCargo(descripcionCargo: string) {
    await this.descripcionCargoTextbox.click();
    await this.descripcionCargoTextbox.fill(descripcionCargo);
  }

  /**
   * Selecciona un valor del combo "Área".
   * @param area Nombre visible del área a seleccionar.
   */
  async selectArea(area: string) {
    await this.areaCombo.selectOption({ label: area });
  }

  /**
   * Selecciona un valor del combo "Estado".
   * @param estado Nombre visible del estado a seleccionar.
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
}
