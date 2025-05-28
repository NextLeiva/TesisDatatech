import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { HorarioPage } from "../pages/HorarioPage";

/**
 * Test: Crear un nuevo Horario
 * Descripción: Automatiza el flujo de registro de un nuevo horario desde el módulo de administración.
 * Incluye login, navegación, llenado de formulario principal, configuración de detalle (días y hora de ingreso)
 * y guardado del registro.
 */
test("Crear un nuevo Horario", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de horarios
  const horario = new HorarioPage(page);
  await horario.clickHorario();
  await horario.clickNuevo();
  await horario.fillCodigo("H001");
  await horario.fillNombreHorario("Sub Area Test");
  await horario.fillDescripcionHorario("Sub Area Test");
  await horario.fillToleranciaIngreso(2);
  await horario.clickDetalleTab();
  await horario.marcarSabado();
  await horario.marcarDomingo();
  await horario.fillIngresoTime(21);
  await horario.clickGuardar();
  await page.close();
});

/**
 * Test: Editar un Horario existente
 * Descripción: Automatiza el flujo de edición de un horario previamente registrado en el sistema.
 * Incluye login, navegación, búsqueda del horario existente, modificación de sus campos y guardado de los cambios.
 */
test("Editar un nuevo Horario", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de horarios
  const horario = new HorarioPage(page);
  await horario.clickHorario();
  await horario.clickEditar();
  await horario.fillCodigo("H001");
  await horario.fillNombreHorario("Horario Test");
  await horario.fillDescripcionHorario("HorarioTest");
  await horario.fillToleranciaIngreso(8);
  await horario.clickGuardar();
  await page.close();
});
