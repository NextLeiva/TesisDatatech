import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AreaPage } from "../pages/AreaPage";

/**
 * Test: Crear una nueva Área
 * Descripción: Este test automatiza el flujo de creación de una nueva área en el sistema.
 * Se realiza login, navegación al módulo de administración, ingreso al formulario de áreas,
 * llenado de campos requeridos y guardado del registro.
 */
test("Crear una nueva area", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de áreas
  const areaPage = new AreaPage(page);
  await areaPage.clickArea();
  await areaPage.clickNuevo();
  await areaPage.fillNombreArea("Seguridad");
  await areaPage.selectLocal("Local Lima");
  await areaPage.clickGuardar();

  await page.close();
});

/**
 * Test: Editar una Área existente
 * Descripción: Este test automatiza el flujo para editar una área previamente registrada.
 * Incluye login, navegación, selección del área y actualización de campos.
 */
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
  // Acceder a la sección de áreas
  const areaPage = new AreaPage(page);
  await areaPage.clickArea();
  await areaPage.clickEditar();
  await areaPage.fillNombreArea("Seguridad2");
  await areaPage.selectLocal("Local Lima");
  await areaPage.clickGuardar();

  await page.close();
});

/**
 * Test: Eliminar una Área
 * Descripción: Este test automatiza el proceso para eliminar una área desde la vista de administración.
 * Realiza login, accede al módulo de áreas y ejecuta la acción de eliminación.
 */
/**test("Eliminar una nueva Area", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de áreas
  const areaPage = new AreaPage(page);
  await areaPage.clickArea();
  await areaPage.clickEliminar();
}); */
