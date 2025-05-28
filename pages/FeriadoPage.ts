import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Feriado".
 * Implementa el patrón Page Object Model (POM) para automatizar acciones
 * dentro del módulo de administración de feriados.
 */
export class FeriadoPage {
  private readonly feriadoLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly fechaTextbox: Locator;
  private readonly feriadoTextbox: Locator;
  private readonly descripcionFeriadoTextbox: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;

  /**
   * Constructor de la clase.
   * @param page Página de Playwright sobre la que se automatiza.
   */
  constructor(page: Page) {
    this.feriadoLink = page.locator("a").filter({ hasText: /^Feriado$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.fechaTextbox = page.locator("#dateFeriado");
    this.feriadoTextbox = page.locator("#txtNombreFeriado");
    this.descripcionFeriadoTextbox = page.locator("#txtDescripcion");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[2]');
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /** Navega al módulo "Feriado". */
  async clickFeriado() {
    await this.feriadoLink.click();
  }

  /** Hace clic en el botón "Nuevo" para registrar un nuevo feriado. */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Guardar" para confirmar el registro. */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Editar" para modificar un feriado existente. */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar" para borrar un feriado. */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo de la fecha del feriado.
   * @param fechaFeriado Fecha en formato 'yyyy-mm-dd'.
   */
  async fillFechaFeriado(fechaFeriado: string) {
    await this.fechaTextbox.click();
    await this.fechaTextbox.fill(fechaFeriado);
  }

  /**
   * Rellena el campo "Nombre del Feriado".
   * @param feriado Nombre del feriado (por ejemplo, "Día del Trabajo").
   */
  async fillFeriado(feriado: string) {
    await this.feriadoTextbox.click();
    await this.feriadoTextbox.fill(feriado);
  }

  /**
   * Rellena el campo "Descripción del Feriado".
   * @param descripcionFeriado Detalle o justificación del feriado.
   */
  async fillDescripcionFeriado(descripcionFeriado: string) {
    await this.descripcionFeriadoTextbox.click();
    await this.descripcionFeriadoTextbox.fill(descripcionFeriado);
  }

  /**
   * Selecciona un estado en el combo "Estado".
   * @param estado Opción visible a seleccionar (por ejemplo, "Activo", "Inactivo").
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }

  /**
   * Usa el campo "Nombre del Feriado" como buscador para filtrar registros.
   * @param buscadorFeriado Texto a buscar.
   */
  async fillBuscadorFeriado(buscadorFeriado: string) {
    await this.feriadoTextbox.fill(buscadorFeriado);
    await this.feriadoTextbox.press("Enter");
  }
}
