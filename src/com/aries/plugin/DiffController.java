package com.aries.plugin;

import com.jennifersoft.view.web.BaseController;
import org.json.JSONException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = { "/plugin" })
public class DiffController extends BaseController
{
    @RequestMapping(value = { "/diff" })
    public ModelAndView getDiffMainPage(WebRequest request) throws JSONException
    {
        ModelAndView modelAndView = new ModelAndView();
        ModelMap map = modelAndView.getModelMap();

        map.put("baseText", request.getParameter("baseText"));
        map.put("newText", request.getParameter("newText"));

        return modelAndView;
    }
}