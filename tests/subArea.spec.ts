import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { SubAreaPage } from "../pages/SubAreaPage";

/**
 * Test: Crear una Sub Área nueva
 * Descripción: Automatiza el flujo de registro de una nueva sub área desde el módulo de administración.
 * Incluye login, navegación, llenado de formulario y guardado del registro.
 */
test("Crear una Sub area nueva", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de sub áreas
  const subArea = new SubAreaPage(page);
  await subArea.clickSubArea();
  await subArea.clickNuevo();
  await subArea.fillNombreSubArea("Sub Area Test");
  await subArea.fillDescripcionSubArea("Sub Area Test");
  await subArea.selectArea("ADMINISTRACION");
  await subArea.clickGuardar();
  await page.close();
});

/**
 * Test: Editar una Sub Área existente
 * Descripción: Automatiza la edición de un registro existente del módulo Sub Área.
 */
/**
test("Editar una nueva Area", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de sub áreas
  const subArea = new SubAreaPage(page);
  await subArea.clickSubArea();
  await subArea.clickEditar();
  await subArea.fillNombreSubArea("Seguridad2");
  await subArea.clickSubArea();
  await subArea.clickGuardar();
  await page.close();
}); */

/**
 * Test: Eliminar una Sub Área
 * Descripción: Realiza la eliminación de una sub área desde el sistema. Verifica flujo completo desde login hasta acción de eliminación.
 */
/**
test("Eliminar una nueva Area", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de sub áreas
  const subArea = new SubAreaPage(page);
  await subArea.clickSubArea();
  await subArea.clickEliminar();
}); */
