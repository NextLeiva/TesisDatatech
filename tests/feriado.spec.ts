import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { FeriadoPage } from "../pages/FeriadoPage";

/**
 * Test: Crear un nuevo Feriado
 * Descripción: Este test automatiza el registro de un nuevo feriado en el sistema.
 * Luego del inicio de sesión, se navega al módulo de administración y a la sección de feriados.
 * Se completa el formulario con la fecha y descripción del feriado, y se guarda el registro.
 */
test("Crear un nuevo feriado", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de feriados
  const feriadoPage = new FeriadoPage(page);
  await feriadoPage.clickFeriado();
  await feriadoPage.clickNuevo();
  await feriadoPage.fillFechaFeriado("2025-12-25");
  await feriadoPage.fillDescripcionFeriado("test feriado");
  await feriadoPage.clickGuardar();
  await page.close();
});

/**
 * Test: Editar un Feriado existente
 * Descripción: Este test automatiza la edición de un feriado previamente registrado.
 * Después del login, se accede al módulo de administración, se entra a la sección de feriados,
 * se selecciona un registro para editar, se actualiza la información y se guarda el cambio.
 */
test("editar un nuevo feriado", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de feriados
  const feriadoPage = new FeriadoPage(page);
  await feriadoPage.clickFeriado();
  await feriadoPage.clickEditar();
  await feriadoPage.fillFechaFeriado("2025-12-25");
  await feriadoPage.fillDescripcionFeriado("test feriado");
  await feriadoPage.clickGuardar();
  await page.close();
});
