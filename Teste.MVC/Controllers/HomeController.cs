using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Teste.MVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Sucesso()
        {
            return Json(new  {success= true},JsonRequestBehavior.AllowGet);
        }
        public JsonResult Erro()
        {
            return Json(new { success = false, msg = "server error" }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Sucesso2()
        {
            return Json(new { success = true, newValue = 222 }, JsonRequestBehavior.AllowGet);
        }
    }
}