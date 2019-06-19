<?php

namespace App\Controller;

use App\Entity\Contacts;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\HttpFoundation\Response; 


class ContactsController extends AbstractController
{
    /**
     * @Route("/contacts", name="contacts")
    */
    public function createContacts(Request $request)
    {
    
        $contacts = new Contacts();
        $contacts->setNom('Lobjois');
        $contacts->setPrenom('Dylan');
        $contacts->setTelephone('0620816861');
        $contacts->setEmail('dylan1.lobjois@epitech.eu');
        $contacts->SetNote('Petit test');
        
        $em = $this->getDoctrine()->getManager();
        $em->persist($contacts);
        $em->flush();

        return new Response('article crée avec id' .$contacts->getId());
    }
}
