using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Teste.MVC.Controllers
{
    public partial class TesteController : Controller
    {
        // GET: Teste
        public virtual ActionResult Index()
        {
            return View();
        }
    }
}