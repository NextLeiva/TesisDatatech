import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AusenciaPage } from "../pages/AusenciaPage";

/**
 * Test: Crear una nueva ausencia
 * Descripción: Automatiza el flujo de registro de una nueva ausencia desde el módulo de administración.
 * Incluye login, navegación, llenado de formulario y guardado del registro.
 */
test("Crear una nueva ausencia", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de ausencias
  const ausenciaPage = new AusenciaPage(page);
  await ausenciaPage.clickAusencia();
  await ausenciaPage.clickNuevo();
  await ausenciaPage.fillNombreAusencia("Test Ausencia");
  await ausenciaPage.fillDescripcionAusencia("Test Ausencia");
  await ausenciaPage.clickGuardar();

  await page.close();
});

/**
 * Test: Editar una ausencia existente
 * Descripción: Automatiza la edición de una ausencia previamente registrada.
 * Incluye login, navegación, selección de la ausencia y actualización de campos.
 */
test("Editar una nueva ausencia", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de ausencias
  const ausenciaPage = new AusenciaPage(page);
  await ausenciaPage.clickAusencia();
  await ausenciaPage.clickEditar();
  await ausenciaPage.fillNombreAusencia("Test Ausencia Editado");
  await ausenciaPage.fillDescripcionAusencia("Test Ausencia Editado");
  await ausenciaPage.selectEstado("Activo");
  await ausenciaPage.clickGuardar();
});
