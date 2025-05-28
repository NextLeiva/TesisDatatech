import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión del módulo "Horario".
 * Implementa el patrón Page Object Model (POM) para automatizar pruebas
 * sobre la configuración y administración de horarios.
 */
export class HorarioPage {
  /** Enlace al módulo Horario */
  private readonly horarioLink: Locator;
  /** Botón para crear un nuevo horario */
  private readonly nuevoButton: Locator;
  /** Campo de texto para codigo del horario */
  private readonly codigoTextbox: Locator;
  /** Campo de texto para nombre del horario */
  private readonly nombreHorarioTextbox: Locator;
  /** Campo de texto para descripción del horario */
  private readonly descripcionHorarioTextbox: Locator;
  /** Campo de texto para tolerancia de ingreso */
  private readonly toleranciaIngresoTextbox: Locator;
  /** ComboBox de estado (Activo/Inactivo) */
  private readonly estadoCombo: Locator;
  /** Botón para guardar el horario */
  private readonly guardarButton: Locator;
  /** Botón para editar horario */
  private readonly editarButton: Locator;
  /** Botón para eliminar horario */
  private readonly eliminarButton: Locator;

  /** Pestaña Detalle del horario */
  private readonly detalleTab: Locator;
  /** Checkbox de días de la semana */
  private readonly lunesCheckbox: Locator;
  private readonly martesCheckbox: Locator;
  private readonly miercolesCheckbox: Locator;
  private readonly juevesCheckbox: Locator;
  private readonly viernesCheckbox: Locator;
  private readonly sabadoCheckbox: Locator;
  private readonly domingoCheckbox: Locator;
  /** Campo de texto de hora de ingreso */
  private readonly ingresoTimeTextbox: Locator;
  /** Campo de texto de hora de salida */
  private readonly salidaTimeTextbox: Locator;

  /** Pestaña Configuraciones adicionales */
  private readonly configuracionesTab: Locator;
  /** Checkboxes y radios de configuración de marcas */
  private readonly primeraMarcaCheckbox: Locator;
  private readonly radioIngresoCheckbox: Locator;
  private readonly radioHorasIngresoCheckbox: Locator;
  private readonly radioIngresoTextbox: Locator;
  private readonly ultimaMarcaCheckbox: Locator;
  private readonly radioSalidaCheckbox: Locator;
  private readonly radioHorasSalidaCheckbox: Locator;

  /** Checkboxes de opciones de configuración de captura y descuento */
  private readonly noCapturaMarcasCheckbox: Locator;
  private readonly descuentoXHorasCheckbox: Locator;
  private readonly sabadoNoConsiderarRefrigerioCheckbox: Locator;
  private readonly capturaXHorasCheckbox: Locator;
  private readonly descuentoXTiempoCheckbox: Locator;

  /** Checkboxes relacionados con horas extras */
  private readonly noHabilitarHorasExtrasCheckbox: Locator;
  private readonly habilitarHorasExtrasCheckbox: Locator;
  private readonly exonerarDescuentoRefrigerioCheckbox: Locator;

  /**
   * Constructor de la clase HorarioPage.
   * @param page Página actual de Playwright
   */
  constructor(page: Page) {
    this.horarioLink = page.locator("a").filter({ hasText: /^Horario$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.codigoTextbox = page.locator("#txtCodigo");
    this.nombreHorarioTextbox = page.locator("#txtNombre");
    this.descripcionHorarioTextbox = page.locator("#txtDescripcion");
    this.toleranciaIngresoTextbox = page.locator("#timeToleranciaIngreso");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[9]');
    this.eliminarButton = page.locator("#btnEliminar");

    // Detalle Tab
    this.detalleTab = page.locator('a[href="#TabDetalle"]');
    this.lunesCheckbox = page.locator("#chkLunes");
    this.martesCheckbox = page.locator("#chkMartes");
    this.miercolesCheckbox = page.locator("#chkMiercoles");
    this.juevesCheckbox = page.locator("#chkJueves");
    this.viernesCheckbox = page.locator("#chkViernes");
    this.sabadoCheckbox = page.locator("#chkSabado");
    this.domingoCheckbox = page.locator("#chkDomingo");
    this.ingresoTimeTextbox = page.locator("#timeIngreso");
    this.salidaTimeTextbox = page.locator("#timeSalida");

    // Configuraciones Tab
    this.configuracionesTab = page.getByRole("tab", {
      name: "Configuraciones",
    });
    this.primeraMarcaCheckbox = page.locator(
      '//input[@id=//label[text()="Primera Marca"]/@for]'
    );
    this.radioIngresoCheckbox = page.locator(
      '//label[text()="Radio Ingreso"]/attribute::for'
    );
    this.radioHorasIngresoCheckbox = page.locator(
      '//label[text()="Radio Horas Ingreso"]/attribute::for'
    );
    this.radioIngresoTextbox = page.locator("#radioHoraIng");
    this.ultimaMarcaCheckbox = page.locator("#chkUltimaMarca");
    this.radioSalidaCheckbox = page.locator("#rdbSalida");
    this.radioHorasSalidaCheckbox = page.locator("#rdbHorasSalida");

    // Configuracion de Captura
    this.noCapturaMarcasCheckbox = page
      .getByLabel("No Captura Marcas")
      .locator("input[type='checkbox']");
    this.descuentoXHorasCheckbox = page
      .getByLabel("Descuento X Horas")
      .locator("input[type='checkbox']");
  }
  async clickHorario() {
    await this.horarioLink.click();
  }
  async clickNuevo() {
    await this.nuevoButton.click();
  }
  async clickGuardar() {
    await this.guardarButton.click();
  }
  async clickEditar() {
    await this.editarButton.click();
  }
  async clickEliminar() {
    await this.eliminarButton.click();
  }
  async fillCodigo(codigo: string) {
    await this.codigoTextbox.click();
    await this.codigoTextbox.fill(codigo);
  }
  async fillNombreHorario(nombreHorario: string) {
    await this.nombreHorarioTextbox.click();
    await this.nombreHorarioTextbox.fill(nombreHorario);
  }
  async fillDescripcionHorario(descripcionHorario: string) {
    await this.descripcionHorarioTextbox.click();
    await this.descripcionHorarioTextbox.fill(descripcionHorario);
  }
  async fillToleranciaIngreso(toleranciaIngreso: number) {
    await this.toleranciaIngresoTextbox.click();
    await this.toleranciaIngresoTextbox.fill(toleranciaIngreso.toString());
  }
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
  async clickDetalleTab() {
    await this.detalleTab.click();
  }
  async clickConfiguracionesTab() {
    await this.configuracionesTab.click();
  }
  async marcarLunes() {
    if (!(await this.lunesCheckbox.isChecked())) {
      await this.lunesCheckbox.check();
    }
  }
  async desmarcarLunes() {
    if (await this.lunesCheckbox.isChecked()) {
      await this.lunesCheckbox.uncheck();
    }
  }
  async marcarMartes() {
    if (!(await this.martesCheckbox.isChecked())) {
      await this.martesCheckbox.check();
    }
  }
  async desmarcarMartes() {
    if (await this.martesCheckbox.isChecked()) {
      await this.martesCheckbox.uncheck();
    }
  }
  async marcarMiercoles() {
    if (!(await this.miercolesCheckbox.isChecked())) {
      await this.miercolesCheckbox.check();
    }
  }
  async desmarcarMiercoles() {
    if (await this.miercolesCheckbox.isChecked()) {
      await this.miercolesCheckbox.uncheck();
    }
  }
  async marcarJueves() {
    if (!(await this.juevesCheckbox.isChecked())) {
      await this.juevesCheckbox.check();
    }
  }
  async desmarcarJueves() {
    if (await this.juevesCheckbox.isChecked()) {
      await this.juevesCheckbox.uncheck();
    }
  }
  async marcarViernes() {
    if (!(await this.viernesCheckbox.isChecked())) {
      await this.viernesCheckbox.check();
    }
  }
  async desmarcarViernes() {
    if (await this.viernesCheckbox.isChecked()) {
      await this.viernesCheckbox.uncheck();
    }
  }
  async marcarSabado() {
    if (!(await this.sabadoCheckbox.isChecked())) {
      await this.sabadoCheckbox.check();
    }
  }
  async desmarcarSabado() {
    if (await this.sabadoCheckbox.isChecked()) {
      await this.sabadoCheckbox.uncheck();
    }
  }
  async marcarDomingo() {
    if (!(await this.domingoCheckbox.isChecked())) {
      await this.domingoCheckbox.check();
    }
  }
  async desmarcarDomingo() {
    if (await this.domingoCheckbox.isChecked()) {
      await this.domingoCheckbox.uncheck();
    }
  }
  async fillIngresoTime(ingresoTime: number) {
    await this.ingresoTimeTextbox.click();
    await this.ingresoTimeTextbox.fill(ingresoTime.toString());
  }
  async fillSalidaTime(salidaTime: string) {
    await this.salidaTimeTextbox.click();
    await this.salidaTimeTextbox.fill(salidaTime);
  }
  async clickPrimeraMarca() {
    if (!(await this.primeraMarcaCheckbox.isChecked())) {
      await this.primeraMarcaCheckbox.check();
    }
  }
  async uncheckPrimeraMarca() {
    if (await this.primeraMarcaCheckbox.isChecked()) {
      await this.primeraMarcaCheckbox.uncheck();
    }
  }
  async clickRadioIngreso() {
    if (!(await this.radioIngresoCheckbox.isChecked())) {
      await this.radioIngresoCheckbox.check();
    }
  }
  async uncheckRadioIngreso() {
    if (await this.radioIngresoCheckbox.isChecked()) {
      await this.radioIngresoCheckbox.uncheck();
    }
  }
  async clickRadioHorasIngreso() {
    if (!(await this.radioHorasIngresoCheckbox.isChecked())) {
      await this.radioHorasIngresoCheckbox.check();
    }
  }
  async uncheckRadioHorasIngreso() {
    if (await this.radioHorasIngresoCheckbox.isChecked()) {
      await this.radioHorasIngresoCheckbox.uncheck();
    }
  }
  async clickUltimaMarca() {
    if (!(await this.ultimaMarcaCheckbox.isChecked())) {
      await this.ultimaMarcaCheckbox.check();
    }
  }
  async uncheckUltimaMarca() {
    if (await this.ultimaMarcaCheckbox.isChecked()) {
      await this.ultimaMarcaCheckbox.uncheck();
    }
  }
  async clickRadioSalida() {
    if (!(await this.radioSalidaCheckbox.isChecked())) {
      await this.radioSalidaCheckbox.check();
    }
  }
  async uncheckRadioSalida() {
    if (await this.radioSalidaCheckbox.isChecked()) {
      await this.radioSalidaCheckbox.uncheck();
    }
  }
  async clickRadioHorasSalida() {
    if (!(await this.radioHorasSalidaCheckbox.isChecked())) {
      await this.radioHorasSalidaCheckbox.check();
    }
  }
  async uncheckRadioHorasSalida() {
    if (await this.radioHorasSalidaCheckbox.isChecked()) {
      await this.radioHorasSalidaCheckbox.uncheck();
    }
  }
  async clickNoCapturaMarcas() {
    if (!(await this.noCapturaMarcasCheckbox.isChecked())) {
      await this.noCapturaMarcasCheckbox.check();
    }
  }
  async uncheckNoCapturaMarcas() {
    if (await this.noCapturaMarcasCheckbox.isChecked()) {
      await this.noCapturaMarcasCheckbox.uncheck();
    }
  }
  async clickDescuentoXHoras() {
    if (!(await this.descuentoXHorasCheckbox.isChecked())) {
      await this.descuentoXHorasCheckbox.check();
    }
  }
  async uncheckDescuentoXHoras() {
    if (await this.descuentoXHorasCheckbox.isChecked()) {
      await this.descuentoXHorasCheckbox.uncheck();
    }
  }
  async clickSabadoNoConsiderarRefrigerio() {
    if (!(await this.sabadoNoConsiderarRefrigerioCheckbox.isChecked())) {
      await this.sabadoNoConsiderarRefrigerioCheckbox.check();
    }
  }
  async uncheckSabadoNoConsiderarRefrigerio() {
    if (await this.sabadoNoConsiderarRefrigerioCheckbox.isChecked()) {
      await this.sabadoNoConsiderarRefrigerioCheckbox.uncheck();
    }
  }
  async clickCapturaXHoras() {
    if (!(await this.capturaXHorasCheckbox.isChecked())) {
      await this.capturaXHorasCheckbox.check();
    }
  }
  async uncheckCapturaXHoras() {
    if (await this.capturaXHorasCheckbox.isChecked()) {
      await this.capturaXHorasCheckbox.uncheck();
    }
  }
  async clickDescuentoXTiempo() {
    if (!(await this.descuentoXTiempoCheckbox.isChecked())) {
      await this.descuentoXTiempoCheckbox.check();
    }
  }
  async uncheckDescuentoXTiempo() {
    if (await this.descuentoXTiempoCheckbox.isChecked()) {
      await this.descuentoXTiempoCheckbox.uncheck();
    }
  }
  async clickNoHabilitarHorasExtras() {
    if (!(await this.noHabilitarHorasExtrasCheckbox.isChecked())) {
      await this.noHabilitarHorasExtrasCheckbox.check();
    }
  }
  async uncheckNoHabilitarHorasExtras() {
    if (await this.noHabilitarHorasExtrasCheckbox.isChecked()) {
      await this.noHabilitarHorasExtrasCheckbox.uncheck();
    }
  }
  async clickHabilitarHorasExtras() {
    if (!(await this.habilitarHorasExtrasCheckbox.isChecked())) {
      await this.habilitarHorasExtrasCheckbox.check();
    }
  }
  async uncheckHabilitarHorasExtras() {
    if (await this.habilitarHorasExtrasCheckbox.isChecked()) {
      await this.habilitarHorasExtrasCheckbox.uncheck();
    }
  }
  async clickExonerarDescuentoRefrigerio() {
    if (!(await this.exonerarDescuentoRefrigerioCheckbox.isChecked())) {
      await this.exonerarDescuentoRefrigerioCheckbox.check();
    }
  }
  async uncheckExonerarDescuentoRefrigerio() {
    if (await this.exonerarDescuentoRefrigerioCheckbox.isChecked()) {
      await this.exonerarDescuentoRefrigerioCheckbox.uncheck();
    }
  }
}
